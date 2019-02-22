// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export function api(endpoint: string): string {
  return `${environment.baseUrl}api/${endpoint}`;
}

export function urlPais() {
  return api('pais/');
}
export function urlEstado() {
  return api('estado/');
}
export function urlCliente() {
  return api('cliente/');
}

export const environment = {
  production: true,
  baseUrl: 'http://localhost:8080/',

  urlCliente,
  urlEstado,
  urlPais,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
