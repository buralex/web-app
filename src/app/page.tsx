import { pages } from '@/constants';
import { redirect } from 'next/navigation';

export default function Default() {
  return redirect(`/${pages.home}`);
}
