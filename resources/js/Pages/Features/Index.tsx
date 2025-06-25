import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Feature, PaginatedDate } from '@/types';
import FeatureItem from '@/Components/FeatureItem';

export default function Index({ features}: { features : PaginatedDate<Feature> }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Index
                </h2>
            }
        >
            <Head title="Index" />
                    {features.data.map((feature) => (
                    <FeatureItem key={feature.id} feature={feature} />
                ))}
        </AuthenticatedLayout>
    );
}
