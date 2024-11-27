// HOLDS NAME, ADDRESS, PRICE, NUMBER OF BEDS, NUMBER OF BATH

import DynamicRoundedBox from './DynamicRoundedBox'

interface GeneralInfoProps {
    address: string;
    price: string;
    numBeds: number;
    numBaths: number;
    squareFoot: number;
}

const GeneralInfo: React.FC<GeneralInfoProps> = ({ address, price, numBeds, numBaths, squareFoot }) => {
    return (
        <DynamicRoundedBox
        size={{ width: '700px', height: '200px' }}
        backgroundColor="lightblue"
        borderRadius="20px"
        shadow={true}
        >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div className="flex-1 mb-4 sm:mb-0">
                    <h2 className="text-xl font-semibold text-gray-800">{address}</h2>
                    <p className="text-lg font-bold text-green-600">{price}</p>                
                </div>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm">
                    <div className="flex items-center">
                        <span className="font-medium text-gray-600">Beds:</span>
                        <span className="ml-2">{numBeds}</span>
                    </div>
                    <div className="flex items-center">
                        <span className="font-medium text-gray-600">Baths:</span>
                        <span className="ml-2">{numBaths}</span>
                    </div>
                    <div className="flex items-center">
                        <span className="font-medium text-gray-600">Sq Ft:</span>
                        <span className="ml-2">{squareFoot}</span>
                    </div>
                </div>
            </div>
        </DynamicRoundedBox>
    )
}

export default GeneralInfo;