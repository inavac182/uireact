export enum ColorTokens {
  token_10 = 'token_10',
  token_50 = 'token_50',
  token_100 = 'token_100',
  token_150 = 'token_150',
  token_200 = 'token_200',
}

/**
 * The intention of this type is that we can use it to set props from components that can have
 * different weight colorations. E.G.
 *
 * <UiText weight="50" /> where `weight` correspond to a different level of token
 */

export type Token = '10' | '50' | '100' | '150' | '200';
