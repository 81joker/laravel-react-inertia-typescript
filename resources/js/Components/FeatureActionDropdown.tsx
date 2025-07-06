import Dropdown from '@/Components/Dropdown';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function FeatureActionDropdown({ feature }: PropsWithChildren<{ feature?: any }>) {
    return (
        <Dropdown>
            <Dropdown.Trigger>
                <button className="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none dark:bg-gray-800 dark:text-gray-400 dark:hover:text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                    </svg>
                </button>
            </Dropdown.Trigger>
            <Dropdown.Content>
                {feature && (
                    <>
                        <Link href={`/feature/${feature.id}/edit`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
                            Edit
                        </Link>
                        <Link href={`/feature/${feature.id}`} method="delete" as="button" className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-100 dark:text-red-400 dark:hover:bg-red-700">
                            Delete
                        </Link>
                    </>
                )}
            </Dropdown.Content>
        </Dropdown>
    );
}