import React from 'react';
import './App.css'; // Pastikan untuk mengimpor file CSS

/**
 * Komponen App adalah komponen utama dari aplikasi kalkulator sederhana ini.
 * Komponen ini menggunakan state untuk menyimpan nilai input dan hasil perhitungan.
 * Terdapat tiga fungsi utama untuk melakukan operasi matematika dasar: penjumlahan, perkalian, dan pembagian.
 * Selain itu, terdapat dua fungsi untuk mengubah nilai input dengan validasi agar hanya menerima angka.
 */
function App() {
  // State untuk menyimpan nilai input pertama
  const [input1, setInput1] = React.useState('');
  // State untuk menyimpan nilai input kedua
  const [input2, setInput2] = React.useState('');
  // State untuk menyimpan hasil perhitungan
  const [result, setResult] = React.useState('');

  /**
   * Fungsi untuk melakukan penjumlahan antara dua input.
   * Fungsi ini akan mengubah state result dengan hasil penjumlahan input1 dan input2.
   */
  function tambah() {
    setResult(parseFloat(input1) + parseFloat(input2));
  }

  /**
   * Fungsi untuk melakukan perkalian antara dua input.
   * Fungsi ini akan mengubah state result dengan hasil perkalian input1 dan input2.
   */
  function kali() {
    setResult(parseFloat(input1) * parseFloat(input2));
  }

  /**
   * Fungsi untuk melakukan pembagian antara dua input.
   * Fungsi ini akan mengubah state result dengan hasil pembagian input1 dan input2.
   * Jika input2 adalah nol, maka hasilnya akan diubah menjadi 'Error' untuk menghindari pembagian dengan nol.
   */
  function bagi() {
    if (parseFloat(input2) !== 0) {
      setResult(parseFloat(input1) / parseFloat(input2));
    } else {
      setResult('Error');
    }
  }

  /**
   * Fungsi untuk mengubah nilai input pertama.
   * Fungsi ini akan memvalidasi input agar hanya menerima angka dan titik desimal.
   * Jika input valid, maka state input1 akan diubah sesuai dengan nilai input.
   */
  function ubahInput1(e) {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setInput1(value);
    }
  }

  /**
   * Fungsi untuk mengubah nilai input kedua.
   * Fungsi ini akan memvalidasi input agar hanya menerima angka dan titik desimal.
   * Jika input valid, maka state input2 akan diubah sesuai dengan nilai input.
   */
  function ubahInput2(e) {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setInput2(value);
    }
  }

  /**
   * Render komponen App.
   * Komponen ini akan menampilkan dua input untuk memasukkan angka, tiga tombol untuk melakukan operasi matematika,
   * dan satu area untuk menampilkan hasil perhitungan.
   */
  return (
    <div className="calculator">
      <h1>KALKULATORKU</h1>
      <div>
        <label>Inputkan Data 1</label>
        <input type="text" value={input1} onChange={ubahInput1} />
      </div>
      <div>
        <label>Inputkan Data 2</label>
        <input type="text" value={input2} onChange={ubahInput2} />
      </div>
      <div className="buttons">
        <button onClick={tambah}>PENJUMLAHAN</button>
        <button onClick={kali}>PERKALIAN</button>
        <button onClick={bagi}>PEMBAGIAN</button>
      </div>
      <div className="result">
        <h2>Hasil: {result}</h2>
      </div>
    </div>
  );
}

export default App;
