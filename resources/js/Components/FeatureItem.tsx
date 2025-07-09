
import { Feature } from '@/types';
import { useState } from 'react';
import { Link } from '@inertiajs/react';
import Dropdown from '@/Components/Dropdown';
import FeatureActionDropdown from './FeatureActionDropdown';
import FeatureUpvoteDownvote from './FeatureUpvoteDownvote';

export default function FeatureItem({ feature }: { feature: Feature }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    }
    return (
        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg mb-4">
            <div className="p-6 text-gray-900 flex gap-8">
                {/* <div className='flex flex-col items-center'>
                    <button className={feature.user_has_upvoted  ? 'text-amber-600' : ''}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                        </svg>

                    </button>
                    <span className={'text-2xl text-semibold ' + (feature.user_has_upvoted  || feature.user_has_downvoted  ? 'text-amber-600' : '')}>
                        {feature.upvote_count}
                        </span>
                    <button className={feature.user_has_downvoted ? 'text-amber-500' : ''}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </button>

                </div> */}
                <FeatureUpvoteDownvote feature={feature} />
                <div className="flex-1">
                    <Link href={`/feature/${feature.id}`} className='text-blue-500 hover:underline mb-2'>
                        <h2 className='text-2xl mb-2'>{feature.name}</h2>
                    </Link>
                    {(feature.description || '').length > 200 && (
                        <>
                            <p>{isExpanded ? feature.description : `${(feature.description || '').slice(0, 200)}...`}</p>

                            <button onClick={toggleReadMore} className="text-amber-500 hover:underline">
                                {isExpanded ? 'Read Less' : 'Read More'}
                            </button>
                        </>
                    )}
                    {(feature.description || '').length <= 200 && (
                        <p>{feature.description}</p>
                    )}

                    {/* <p>{isExpanded ? feature.description : `${feature.description.slice(0, 100)}...` }</p> */}
                    {/* <button className='text-amber-500 hover:underline' onClick={toggleReadMore}>{isExpanded ? 'Read less' : 'Read more'}</button> */}

                    <div className="py-4">
                        <Link prefetch href={route('feature.show', feature)}
                            className="inline-flex gap-2 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                            Comments
                        </Link>
                    </div>

                </div>
                <div>
                    <FeatureActionDropdown feature={feature} />

                </div>
            </div>
        </div>
    );
}