
import { Feature } from '@/types';
export default function FeatureItem({ feature }: { feature: Feature }) {
    return (
        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg mb-4">
            <div className="p-6 text-gray-900">
                <h3>{feature.name}</h3>
            </div>
        </div>
    );
}