import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Feature {
  title: string;
  description: string;
}

interface PackageOption {
  name: string;
  price: number;
  features: string[];
}

const features: Feature[] = [
  { title: "Fitur 1", description: "Deskripsi fitur 1 yang menarik" },
  { title: "Fitur 2", description: "Deskripsi fitur 2 yang berguna" },
  { title: "Fitur 3", description: "Deskripsi fitur 3 yang inovatif" },
];

const packageOptions: PackageOption[] = [
  { name: "Basic", price: 9.99, features: ["Fitur 1", "Fitur 2"] },
  { name: "Pro", price: 19.99, features: ["Fitur 1", "Fitur 2", "Fitur 3"] },
  { name: "Enterprise", price: 29.99, features: ["Fitur 1", "Fitur 2", "Fitur 3", "Dukungan prioritas"] },
];

const PriceList: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Fitur Utama</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Pilih Paket Anda</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packageOptions.map((pkg, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{pkg.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-2xl font-bold mb-4">${pkg.price}/bulan</p>
                <ul className="list-disc list-inside mb-6">
                  {pkg.features.map((feature, fIndex) => (
                    <li key={fIndex}>{feature}</li>
                  ))}
                </ul>
              </CardContent>
              <div className="p-4">
                <Button className="w-full">Pilih {pkg.name}</Button>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PriceList;