globalThis.process ??= {}; globalThis.process.env ??= {};
import { l as le, j as ju, p as pe, n as ne } from './index_Dhdmj7aT.mjs';

function createDirectusClient(directusUrl) {
  const client = le(directusUrl).with(ju()).with(ne("cookie", { credentials: "include" }));
  return client;
}
function createTokenClient(token, directusUrl) {
  const tokenClient = le(directusUrl).with(ju()).with(pe(token));
  return tokenClient;
}

export { createDirectusClient as a, createTokenClient as c };
