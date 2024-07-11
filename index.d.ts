declare module 'trip-recommender' {
  export interface TestButtonProps {
    label: string,
    onClick: () => void
  }
  export const TestButton: React.FC<TestButtonProps>;
}