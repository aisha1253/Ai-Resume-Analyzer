import { render, screen } from '@testing-library/react';
import ScoreCard from '@/components/ScoreCard';

describe('ScoreCard', () => {
  test('renders the score percentage', () => {
    render(<ScoreCard score={75} level="Mid" />);
    expect(screen.getByText('75%')).toBeInTheDocument();
  });

  test('renders experience level', () => {
    render(<ScoreCard score={75} level="Senior" />);
    expect(screen.getByText('Senior')).toBeInTheDocument();
  });

  test('shows Strong match for score 80', () => {
    render(<ScoreCard score={80} level="Mid" />);
    expect(screen.getByText('Strong match')).toBeInTheDocument();
  });

  test('shows Weak match for score 25', () => {
    render(<ScoreCard score={25} level="Junior" />);
    expect(screen.getByText('Weak match')).toBeInTheDocument();
  });
});
