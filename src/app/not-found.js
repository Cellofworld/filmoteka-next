import Link from 'next/link';
 
export default function NotFound() {
  return (
    <div>
      <h2>Такой страницы нет</h2>
      <p>
        Вернуться <Link href="/">на гланую</Link>
      </p>
    </div>
  );
}