/* JSONから読み込んだポケモンの種族値情報 */
declare module "pokemonTribeRateData" {
  export type PokemonJson = {
      name: string;
      h: string;
      a: string;
      b: string;
      c: string;
      d: string;
      s: string;
      total: string;
  };

  export type Pokemon = {
      name: string;
      h: number;
      a: number;
      b: number;
      c: number;
      d: number;
      s: number;
      total: number;
  };
}
