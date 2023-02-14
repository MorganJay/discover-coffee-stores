import Link from 'next/link';
import { useRouter } from 'next/router';

const CoffeeStore = () => {
  const { query } = useRouter();

  return (
    <div>
      Coffee store page - {query.id}
      <Link href="/">Back to home</Link> 
      <Link href="/coffee-store/dynamic">Go to page dynamic</Link> 
    </div>
  );
};

export default CoffeeStore;
