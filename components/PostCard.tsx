import Link from 'next/link';
import { PostCardInterface } from '@/interfaces/PostCardInterface';

export default function PostCard({
  title,
  author,
  date,
  category,
  description,
  link
}: PostCardInterface) {
  return (
    <div className="bg-gray-100 rounded-lg p-6 hover:bg-gray-200 transition-colors">
      <Link href={link} className="space-y-4 block">
        <div>
          <span className="text-sm text-primary-blue bg-primary-yellow px-3 py-1 rounded-full">
            {category}
          </span>
        </div>

        <h3 className="text-xl font-bold text-primary-blue">
          {title}
        </h3>

        <p className="text-gray-dark">
          {description}
        </p>

        <div className="flex items-center gap-2 text-sm text-gray-dark">
          <span>{author}</span>
          <span>•</span>
          <span>{date}</span>
        </div>
      </Link>
    </div>
  );
} 