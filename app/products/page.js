'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/header';
import Footer from '@/components/Footer';

const productCategories = [
    {
        title: 'Oral Liquid Preparations',
        image: '/products/Oral Liquid Preparations.jpeg',
        items: [
            'Levosalbutamol 1 mg and Guaifenesin 100 mg Syrup',
            'Levocetirizine Hydrochloride 0.8 mg, Ambroxol Hydrochloride 15 mg, Phenylephrine 5 mg & Guaiphenesin 50 mg Syrup',
            'Lactulose 3.35 gm & Liquid Paraffin 1.25 ml Emulsion',
            'Levosalbutamol 0.5 mg & Theophylline 50 mg Syrup',
            'Potassium Citrate 1100 mg and Magnesium Citrate 375 mg Oral Solution',
            'Butamirate Citrate Syrup 7.5mg/5ml',
            'Lactulose 35 mg, Liquid Paraffin 42.91 mg and White Paraffin 21.25 mg Oral Gel',
            'Ferrous Ascorbate 100 mg, L-Methyl Folate 1 mg and Zinc 61.8 mg Suspension',
            'Potassium Citrate 1100 mg, Magnesium Citrate 375 mg and Pyridoxine HCl 20 mg Solution',
            'Ranitidine Oral Solution IP 75 mg',
            'Ambroxol HCl 30 mg, Guaiphenesin 100 mg and Terbutaline 2.5 mg Syrup',
            'Zinc Gluconate Syrup USP 20 mg',
            'Ondansetron Oral Solution IP 2 mg',
            'Levetiracetam Oral Solution 100 mg',
            'Ofloxacin Oral Suspension IP 50 mg',
            'Ursodeoxycholic Acid Oral Suspension 125mg',
            'Ursodeoxycholic Acid Oral Suspension 250mg',
            'Sucralfate Oral Suspension 1gm/5ml',
            'Sucralfate 1mg & Oxetacaine 10mg Suspension',
            'Dextromethorphan 30mg & Chlorpheniramine Maleate 4mg SR Suspension (Patented Technology)',
            'Sodium Alginate IP 250 mg, Sodium Bicarbonate IP 133.5 mg & Calcium Carbonate IP 80 mg Suspension',
        ],
    },
    {
        title: 'Tablet Preparations',
        image: '/products/Tablet Preparations.avif',
        items: [
            'Metformin Hydrochloride 500 mg & Glimepiride 0.5 mg Tablets',
            'Metformin Hydrochloride 1000 mg & Glimepiride 0.5 mg Tablets',
            'Diclofenac Potassium 50 mg & Serratiopeptidase 10 mg Tablets',
            'Azithromycin Tablets IP 250 mg',
            'Azithromycin Tablets IP 500 mg',
            'Cefixime Trihydrate Tablets IP 100 mg',
            'Cefixime Trihydrate Tablets IP 200 mg',
            'Cefpodoxime Tablets 200 mg',
            'Serratiopeptidase Tablets IP 10 mg',
            'Clonazepam 0.25 mg and Propranolol Tablets 10 mg',
            'Clonazepam 0.50 mg and Propranolol 20 mg Tablets',
            'Escitalopram Oxalate 10 mg and Flupentixol 0.5 mg Tablets',
            'Metoprolol Succinate 25 mg and Hydrochlorothiazide 12.5 mg Tablets',
            'Metoprolol Succinate 50 mg and Hydrochlorothiazide 12.5 mg Tablets',
            'Torsemide 10 mg and Spironolactone 25 mg Tablets',
            'Torsemide 20 mg and Spironolactone 25 mg Tablets',
            'Alfuzosin HCl and Dutasteride Tablets',
            'Tamsulosin HCl and Dutasteride Tablets',
            'Ferrous Ascorbate, L-Methyl Folate and Zinc Tablets',
            'Potassium Citrate 978 mg, Magnesium Citrate 263.10 mg and Pyridoxine HCl 15 mg Tablets',
            'Diclofenac Sodium, Paracetamol and Serratiopeptidase Tablets',
            'Ferric Citrate Tablets',
            'Memantine HCl & Donepezil HCl Tablets',
            'Rabeprazole Sodium 20 mg and Levosulpiride 75 mg Tablets',
            'Blonanserin Tablets 2 mg',
            'Blonanserin Tablets 4 mg',
            'Blonanserin Tablets 8 mg',
            'Flupenthixole Decanoate Tablets 0.5 mg',
            'Paracetamol Sustained Release Tablets 1000 mg',
            'Ofloxacin 200 mg and Ornidazole 500 mg Tablets',
            'Bisoprolol Fumarate Tablets 5 mg',
            'Amlodipine Besylate and Atenolol Tablets',
            'Atorvastatin 10 mg and Ezetimibe 10 mg Tablets',
            'Atorvastatin 20 mg and Ezetimibe 10 mg Tablets',
        ],
    },
    {
        title: 'Capsule Preparations',
        image: '/products/Capsule Preparations.jpeg',
        items: [
            'Levosulpiride SR 75 mg and Rabeprazole Sodium ER 20 mg Capsules',
            'Atorvastatin 10 mg and Aspirin (Delayed Release) 75 mg Capsules',
            'Ramipril Capsule IP 2.5 mg',
            'Omeprazole Capsules IP 20 mg',
            'Omeprazole 20 mg and Domperidone 10 mg Capsules IP',
            'Pantoprazole 40 mg and Domperidone 30 mg (Sustained release) Capsules',
            'Pantoprazole 20 mg and Domperidone 10 mg Capsules',
            'Pantoprazole 40 mg and Domperidone 10 mg Capsules',
            'Rabeprazole Sodium 20 mg and Domperidone 30 mg (Sustained release) Capsules',
            'Loperamide Hydrochloride Capsule IP 2 mg',
            'Itraconazole Capsules 100 mg',
            'Itraconazole Capsules 200 mg',
            'Clopidogrel 75 mg and Aspirin 75 mg Capsules',
            'Rabeprazole (as enteric coated tablet) 10 mg, Clidinium Bromide 2.5 mg, Dicyclomine 10 mg and Chlordiazepoxide 5 mg Capsules',
            'Calcium Dobesilate Monohydrate Capsules 500 mg',
            'Pyridoxine 3 mg, Niacinamide 50 mg, Folic Acid 1.5 mg and Lactic Acid Bacillus 40 million spores Capsules',
            'Metoprolol Succinate 25 mg Extended Release Capsules',
            'Metoprolol Succinate 50 mg Extended Release Capsules',
            'Atorvastatin 10 mg, Clopidogrel 75 mg and Aspirin 75 mg Capsules',
            'Rosuvastatin 10 mg, Aspirin 75 mg and Clopidogrel 75 mg Capsules',
            'Rosuvastatin 20 mg, Aspirin 75 mg and Clopidogrel 75 mg Capsules',
            'Pregabalin 75 mg and Methylcobalamin 750 mcg Capsules',
            'Thiocochicoside 4 mg and Diclofenac 50 mg Capsules',
            'Thiocochicoside 8 mg and Diclofenac 50 mg Capsules',
            'Nitrofurantoin Capsules USP 100 mg',
            'Omeprazole 20 mg and Domperidone 30 mg (SR) Capsules',
            'Pantoprazole 40 mg and Cinitapride 3 mg (SR) Capsules',
            'Ramipril Capsules IP 5 mg',
            'Esomeprazole 40 mg and Domperidone 30 mg (SR) Capsules',
            'Esomeprazole 20 mg and Domperidone 10 mg (SR) Capsules',
            'Esomeprazole Enteric coated 40 mg and Levosulpiride 75 mg Sustained Release Capsules',
            'Pregabalin 75 mg and Methylcobalamin 750 mcg Capsules',
            'Acebrophylline Capsules 100 mg',
            'Pantoprazole (Enteric Coated) 40 mg and Levosulpiride 75 mg (SR) Capsules',
            'Rabeprazole Sodium 20 mg and Cinitapride 3 mg (SR) Capsules',
        ],
    },
    {
        title: 'Ointment & Gel Preparations',
        image: '/products/Ointment & Gel Preparations.jpeg',
        items: [
            'Fluticasone Propionate Ointment IP 0.05% w/w',
            'Fusidic Acid Cream IP 2% w/w',
            'Terbinafine HCl Cream 1.0% w/w',
            'Ketoconazole Cream 2.0% w/w',
            'Vitamin E with Aloe Vera Lotion 0.5% w/w',
            'Diclofenac Sodium, Linseed Oil, Methyl Salicylate, Menthol, Capsaicin and Benzyl Alcohol Gel',
            'Clobetasol Propionate Cream 0.05% w/w',
            'Povidone Iodine Ointment 5% w/w',
            'Eberconazole 1% w/w and Mometasone 0.1% w/w Cream',
            'Sertaconazole Nitrate Cream 2% w/w',
            'Diclofenac Sodium 1% w/w, Linseed Oil 3% w/w, Methyl Salicylate 10%, Menthol 5% and Benzyl Alcohol 1.0% Gel',
            'Clotrimazole 1% w/w, Beclomethasone Dipropionate 0.025% w/w and Chlorocresol 0.2% Cream',
            'Clobetasol Propionate 0.05% w/w, Neomycin 0.5% w/w, Miconazole Nitrate 2.0% w/w, Chlorocresol 0.1% w/w Cream',
            'Bacitracin Zinc 500 IU, Polymyxin B Sulfate 10,000 IU Ointment',
            'Silver Sulfadiazine Cream 1% w/w',
            'Betamethasone Valerate 0.1% w/w and Clotrimazole 1% w/w Cream',
            'Mometasone Furoate 0.1% w/w and Neomycin 0.5% w/w Cream',
            'Hydrocortisone Butyrate Cream 0.1% w/w',
            'Betamethasone Dipropionate 0.05% w/w Cream',
            'Lidocaine 5% w/w and Prilocaine 5% w/w Cream',
            'Triamcinolone Acetonide 0.1% w/w Cream',
            'Mupirocin 2% w/w Cream',
            'Benzoyl Peroxide 2.5% w/w Gel',
            'Tretinoin 0.025% Gel',
            'Clindamycin 1% w/w and Benzoyl Peroxide 5% Gel',
            'Calcipotriol 0.005% Ointment',
            'Dexamethasone 0.1% Ointment',
            'Clindamycin 1% Ointment',
            'Pimecrolimus 1% Cream',
            'Hydroxychloroquine Sulfate 0.5% Gel',
            'Pyrithione Zinc 1% Shampoo',
            'Miconazole Nitrate 2% w/w Ointment',
            'Chlorhexidine Gluconate 4% w/w Gel',
            'Tetracycline 1% Ointment',
            'Corticosteroid and Antibacterial Cream Combination',
        ],
    },
];

export default function ProductPage() {
    return (
        <div className="bg-gradient-to-br from-gray-50 to-white text-gray-800 min-h-screen">
            <Header />
            <main className="p-8">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-8 text-blue-900 tracking-tight">
                    Our Product Categories
                </h1>

                <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {productCategories.map((category, index) => (
                        <motion.section
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden border border-gray-200 transition-shadow"
                        >
                            {/* Category image */}
                            <div className="relative h-56 sm:h-64 md:h-72">
                                <Image
                                    src={category.image}
                                    alt={category.title}
                                    fill
                                    className="object-cover w-full h-full"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white px-5 py-4 text-xl font-semibold">
                                    {category.title}
                                </div>
                            </div>

                            {/* Scrollable product list */}
                            <div className="p-6 space-y-3 max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-blue-100">
                                {category.items.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-gray-100 hover:bg-blue-100 text-sm text-gray-800 px-4 py-2 rounded-lg shadow-sm transition duration-200"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </motion.section>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}