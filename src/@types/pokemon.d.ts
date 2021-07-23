/* JSONから読み込んだポケモンの種族値情報 */
declare module "pokemonTribeRateData" {
  export type Pokemon = {
      name: string;
      h: string;
      a: string;
      b: string;
      c: string;
      d: string;
      s: string;
      total: string;
  };
}
