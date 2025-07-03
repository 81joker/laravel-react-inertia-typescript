import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Create() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Feature Create
                </h2>
            }
        >
            <Head title={`Feature Create`} />


            <div className="mb-4 overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                    <h2>Create a New Feature</h2>
                </div>
        </AuthenticatedLayout>
    );
}
