export const CoutnerActions = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  ADD: 'ADD',
} as const;

type ValueOf<T> = T[keyof T];

export interface ICounterAction {
  type: ValueOf<typeof CoutnerActions>;
  amount?: number;
}

export const decrement = (): ICounterAction => ({
  type: CoutnerActions.DECREMENT,
});

export const increment = (): ICounterAction => ({
  type: CoutnerActions.INCREMENT,
});

export const add = (amount: number): ICounterAction => ({
  type: CoutnerActions.ADD,
  amount,
});
