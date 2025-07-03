import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Feature, PaginatedDate } from '@/types';
import FeatureItem from '@/Components/FeatureItem';

export default function Show({ feature }: { feature: Feature }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Index
                </h2>
            }
        >
            <Head title={`Feature Show - ${feature.name}`} />


            <div className="mb-4 overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                <div className="p-6 text-gray-900 dark:text-gray-100 flex gap-8">
                    {/* <FeatureUpvoteDownvote feature={feature} /> */}
                    <div className="flex-1">
                        <h2 className="text-2xl mb-2">{feature.name}</h2>
                        <p>{feature.description}</p>
                        {/* {comments && <div className="mt-8">
                            <NewCommentForm feature={feature} />
                            {comments.map(comment => (
                                <CommentItem comment={comment} key={comment.id} />
                            ))}
                        </div>} */}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
