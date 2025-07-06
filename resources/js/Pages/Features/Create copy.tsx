import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import { useForm } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import TextAreaInput from '@/Components/TextAreaInput';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { Link } from '@inertiajs/react';
// import { route } from '@inertiajs/react';
// import { Feature } from '@/types/Feature';
export default function Create() {
   const {
    data,
    setData,
    processing,
    errors,
    post
  } = useForm({
    name: '',
    description: ''
  })
  const createFeature: FormEventHandler = (ev) => {
    ev.preventDefault();

    post(route('feature.store'), {
      preserveScroll: true
    })
  }
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Feature Create
                </h2>
            }
        >
            <Head title={`Feature Create`} />

            <div className="p-7 mb-4 overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                <h2 className="text-xl font-semibold leading-tight text-gray-800">Create a New Feature</h2>
              <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <form onSubmit={createFeature} className="mt-6 space-y-6">
                    <div>
                        <InputLabel htmlFor="name" value="Name" />

                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full"
                            autoComplete="name"
                            isFocused={true}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                        />

                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="description" value="Description" />

                        <TextAreaInput
                            id="description"
                            name="description"
                            value={data.description}
                            className="mt-1 block w-full"
                            onChange={(e) => setData('description', e.target.value)}
                            required
                        />

                        <InputError message={errors.description} className="mt-2" />
                    </div>



            <div className="mt-4 flex items-center justify-end">
                {/* <Link
                    href="#"
                    className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800"
                >
                    Already registered?
                </Link> */}

                <PrimaryButton className="ms-4" disabled={processing}>
                    Create Feature
                </PrimaryButton>
            </div>
        </form> 
</div >  
</div >  

</AuthenticatedLayout >
);
}
// This code is a React component for creating a new feature in an authenticated layout.