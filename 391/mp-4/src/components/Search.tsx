import { useState } from 'react';

interface SearchProps {
  onSearch: (term: string) => void;
}

const Search = ({ onSearch }: SearchProps) => {
  const [term, setTerm] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (term.trim()) {
      onSearch(term.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '2rem', textAlign: 'center' }}>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search sounds (e.g. rain, piano)"
        style={{ padding: '0.5rem', fontSize: '1rem', width: '60%' }}
      />
      <button type="submit" style={{ marginLeft: '1rem', padding: '0.5rem 1rem' }}>
        Search
      </button>
    </form>
  );
};

export default Search;