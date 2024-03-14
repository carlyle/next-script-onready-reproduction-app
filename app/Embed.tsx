"use client";

import Script from "next/script";
import { useId, useState } from "react";

interface Props {
  id: number;
}

export const Embed = ({ id }: Props) => {
  const [error, setError] = useState<any | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [ready, setReady] = useState(false);

  return (
    <>
      <table style={{ marginBottom: "2rem" }}>
        <thead>
          <tr>
            <th colSpan={2}>{`Embed #${id}`}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Error?</th>
            <td>{Boolean(error) ? JSON.stringify(error) : "➖"}</td>
          </tr>
          <tr>
            <th>Loaded?</th>
            <td>{loaded ? "✅" : "❌"}</td>
          </tr>
          <tr>
            <th>Ready?</th>
            <td>{ready ? "✅" : "❌"}</td>
          </tr>
        </tbody>
      </table>

      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js"
        strategy="lazyOnload"
        onError={(error) => {
          setError(error);
        }}
        onLoad={() => {
          setLoaded(true);
        }}
        onReady={() => {
          setReady(true);
        }}
      />
    </>
  );
};
