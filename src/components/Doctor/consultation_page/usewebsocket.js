// useWebSocket.js (new utility hook)
import { useEffect, useRef, useState, useCallback } from 'react';

export function useWebSocket({ url, onMessage, protocols, reconnectInterval = 3000 }) {
  const wsRef = useRef(null);
  const [connected, setConnected] = useState(false);
  const reconnectRef = useRef(null);

  const connect = useCallback(() => {
    if (wsRef.current) wsRef.current.close();
    try {
      wsRef.current = new WebSocket(url, protocols);
    } catch (e) {
      console.error('WebSocket create error', e);
      return;
    }
    wsRef.current.onopen = () => {
      setConnected(true);
      if (reconnectRef.current) {
        clearTimeout(reconnectRef.current);
        reconnectRef.current = null;
      }
    };
    wsRef.current.onmessage = (ev) => {
      let data;
      try {
        data = JSON.parse(ev.data);
      } catch (e) {
        data = ev.data;
      }
      onMessage && onMessage(data);
    };
    wsRef.current.onclose = () => {
      setConnected(false);
      // try reconnect
      reconnectRef.current = setTimeout(() => connect(), reconnectInterval);
    };
    wsRef.current.onerror = (err) => {
      console.error('WS error', err);
      wsRef.current?.close();
    };
  }, [url, onMessage, protocols, reconnectInterval]);

  useEffect(() => {
    connect();
    return () => {
      if (reconnectRef.current) clearTimeout(reconnectRef.current);
      wsRef.current?.close();
    };
  }, [connect]);

  const send = useCallback((payload) => {
    if (!wsRef.current || wsRef.current.readyState !== WebSocket.OPEN) {
      console.warn('WebSocket not open; message dropped', payload);
      return false;
    }
    wsRef.current.send(typeof payload === 'string' ? payload : JSON.stringify(payload));
    return true;
  }, []);

  return { send, connected, raw: wsRef.current };
}
