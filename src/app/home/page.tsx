import { Button } from '@/components/Button';
import { pages } from '@/constants';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1 className="text-center p-5">Welcome to the web app</h1>
      <h3 className="text-center">Here you can:</h3>
      <div className="text-center p-1">
        <p> {`- View a list of articles (with a "front_page" tag)`}</p>
        <p>
          {`- Click on an author's username to see all articles written by that
            author`}
        </p>
        <p>{`- Delete article (it's a simulation)`}</p>
      </div>
      <div className="text-center page-link p-5">
        <Link href={`/${pages.articles}`}>
          <Button variant="secondary">Go to Articles</Button>
        </Link>
      </div>
    </div>
  );
}
