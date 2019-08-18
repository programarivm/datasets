import React from 'react';
import ReactDataGrid from 'react-data-grid';
import logo from './logo.svg';
import './App.css';

const columns = [
  { key: 'id', name: 'ID' },
  { key: 'title', name: 'Title' },
  { key: 'count', name: 'Count' } ];

const rows = [
  {
    id: 0,
    title: 'a',
    count: 20
  },
  {
    id: 1,
    title: 'b',
    count: 40
  },
  {
    id: 2,
    title: 'c',
    count: 60
  },
  {
    id: 3,
    title: 'c',
    count: 80
  },
  {
    id: 4,
    title: 'd',
    count: 100
  },
  {
    id: 5,
    title: 'e',
    count: 120
  },
  {
    id: 6,
    title: 'f',
    count: 140
  },
  {
    id: 7,
    title: 'g',
    count: 160
  },
  {
    id: 8,
    title: 'h',
    count: 180
  },
  {
    id: 9,
    title: 'i',
    count: 200
  },
  {
    id: 10,
    title: 'j',
    count: 220
  },
  {
    id: 11,
    title: 'k',
    count: 240
  },
  {
    id: 12,
    title: 'l',
    count: 260
  },
  {
    id: 13,
    title: 'm',
    count: 280
  },
  {
    id: 14,
    title: 'n',
    count: 300
  },
  {
    id: 15,
    title: 'o',
    count: 320
  },
  {
    id: 16,
    title: 'p',
    count: 340
  },
  {
    id: 17,
    title: 'q',
    count: 360
  },
  {
    id: 18,
    title: 'r',
    count: 380
  },
  {
    id: 19,
    title: 's',
    count: 400
  },
  {
    id: 20,
    title: 't',
    count: 420
  },
  {
    id: 21,
    title: 'u',
    count: 440
  },
  {
    id: 22,
    title: 'v',
    count: 460
  }
];

function App() {
  return (
    <ReactDataGrid
      columns={columns}
      rowGetter={i => rows[i]}
      rowsCount={23}
      minHeight={300}
    />
  );
}

export default App;
