import React, { useState } from 'react';
import './GenderResponse.module.css';

type GenderResponse = {
  name: string;
  gender: 'male' | 'female';
  country: string;
  probability: number;
  remaining_credits: number;
};

const GenderChecker: React.FC = () => {
  const [name, setName] = useState('');
  const [data, setData] = useState<GenderResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleClick = async () => {
    if (!name.trim()) {
      setError('Введите имя');
      setData(null);
      return;
    }

    setLoading(true);
    setError('');
    setData(null);

    try {
      const response = await fetch(`https://api.genderapi.io/api/?name=${name}`);
      if (!response.ok) throw new Error('Ошибка сервера');

      const result: GenderResponse = await response.json();
      setData(result);
    } catch (err) {
      setError((err as Error).message || 'Ошибка при запросе');
    } finally {
      setLoading(false);
    }
  };

  const translateGender = (gender: string) =>
    gender === 'male' ? 'мужской' : gender === 'female' ? 'женский' : 'неизвестно';

  return (
    <div className="container">
      <h2>Определение пола по имени</h2>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Введите имя"
        className="input"
      />
      <button onClick={handleClick} disabled={loading} className="button">
        Определить
      </button>

      {loading && <p className="loading">🔄 Загружаем данные...</p>}
      {error && <p className="error">❌ {error}</p>}

      {data && (
        <div className="result">
          <p><strong>Имя:</strong> {data.name}</p>
          <p><strong>Пол:</strong> {translateGender(data.gender)}</p>
          <p><strong>Страна:</strong> {data.country}</p>
          <p><strong>Вероятность:</strong> {data.probability}%</p>
          <p><strong>Остаток запросов:</strong> {data.remaining_credits}</p>
        </div>
      )}
    </div>
  );
};

export default GenderChecker;