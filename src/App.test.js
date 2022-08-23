import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

test('renders dropdown button and options on click', async() => {
  render(<App />);

  const dropdownButton = screen.getByRole('button', {
    name: /Open options button/i
  });
  const optionsMenu = screen.queryByRole('menu');

  expect(dropdownButton).toBeInTheDocument();
  expect(optionsMenu).not.toBeInTheDocument();

  fireEvent.click(dropdownButton);

  await waitFor(() => {
    const optionsMenu = screen.getByRole('menu');
    expect(optionsMenu).toBeInTheDocument();
  });

  await waitFor(() => {
    const helpLink = screen.getByRole('menuitem', { name: /help/i });
    expect(helpLink).toBeInTheDocument();
  });

  await waitFor(() => {
    const renameButton = screen.getByRole('menuitem', { name: /rename/i });
    expect(renameButton).toBeInTheDocument();
  });

  await waitFor(() => {
    const delateButton = screen.getByRole('menuitem', { name: /delate/i });
    expect(delateButton).toBeInTheDocument();
  });
});
