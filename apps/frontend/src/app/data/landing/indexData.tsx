// src/data/homeData.ts (atau src/lib/homeData.ts)

import { Calendar, CheckCircle, ClipboardList, Clock, MessageSquare, Scissors, Search, Star, Users } from "lucide-react";
import type { Barber, Feature, OrderStep, Review } from "@/app/lib/interfaces"; // pastikan path `@/types` sesuai

export const featuredBarbers: Barber[] = [
  {
    id: "1",
    name: "Ahmad Rizky",
    speciality: "Classic & Modern Cut",
    rating: 4.8,
    totalReviews: 127,
    image: "https://via.placeholder.com/300x300?text=Ahmad+Rizky",
    price: "Rp 50.000",
  },
  {
    id: "2",
    name: "Budi Santoso",
    speciality: "Beard Styling Expert",
    rating: 4.9,
    totalReviews: 89,
    image: "https://via.placeholder.com/300x300?text=Budi+Santoso",
    price: "Rp 75.000",
  },
  {
    id: "3",
    name: "Candra Wijaya",
    speciality: "Premium Hair Treatment",
    rating: 4.7,
    totalReviews: 156,
    image: "https://via.placeholder.com/300x300?text=Candra+Wijaya",
    price: "Rp 100.000",
  },
];

export const reviews: Review[] = [
  {
    id: "1",
    customerName: "Doni Pratama",
    rating: 5,
    comment: "Pelayanan sangat memuaskan! Barbernya profesional dan hasil potongannya rapi.",
    date: "2 hari lalu",
  },
  {
    id: "2",
    customerName: "Eko Wardana",
    rating: 4,
    comment: "Booking online mudah banget, tidak perlu antri lama. Recommended!",
    date: "1 minggu lalu",
  },
  {
    id: "3",
    customerName: "Fajar Nugraha",
    rating: 5,
    comment: "Tempat bersih, alat lengkap, dan barbernya ramah. Pasti balik lagi!",
    date: "2 minggu lalu",
  },
];

export const features: Feature[] = [
  {
    icon: <Calendar className="w-8 h-8 text-blue-600" />,
    title: "Booking Online",
    description: "Reservasi mudah kapan saja dengan sistem booking online 24/7",
  },
  {
    icon: <Clock className="w-8 h-8 text-blue-600" />,
    title: "Jadwal Fleksibel",
    description: "Pilih waktu yang sesuai dengan jadwal Anda dari slot yang tersedia",
  },
  {
    icon: <Users className="w-8 h-8 text-blue-600" />,
    title: "Barber Profesional",
    description: "Tim barber berpengalaman dengan keahlian berbagai gaya rambut",
  },
  {
    icon: <Star className="w-8 h-8 text-blue-600" />,
    title: "Review & Rating",
    description: "Sistem review transparan untuk menjaga kualitas layanan terbaik",
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
    title: "Konfirmasi Otomatis",
    description: "Dapatkan konfirmasi booking dan reminder melalui email",
  },
  {
    icon: <MessageSquare className="w-8 h-8 text-blue-600" />,
    title: "Layanan Terpercaya",
    description: "Platform terpercaya dengan ribuan customer yang puas",
  },
];

export const orderSteps: OrderStep[] = [
  {
    icon: <Search className="w-12 h-12 text-blue-600" />,
    title: "1. Temukan Barber Pilihanmu",
    description: "Jelajahi daftar barber profesional kami dan filter berdasarkan lokasi, spesialisasi, atau rating.",
  },
  {
    icon: <Calendar className="w-12 h-12 text-blue-600" />,
    title: "2. Pilih Waktu yang Tepat",
    description: "Lihat ketersediaan jadwal barber secara real-time dan pilih slot yang paling sesuai dengan Anda.",
  },
  {
    icon: <ClipboardList className="w-12 h-12 text-blue-600" />,
    title: "3. Konfirmasi Booking Anda",
    description: "Isi detail layanan yang diinginkan, konfirmasi booking, dan dapatkan notifikasi instan.",
  },
  {
    icon: <Scissors className="w-12 h-12 text-blue-600" />,
    title: "4. Nikmati Potongan Rambut Terbaik!",
    description: "Datang tepat waktu dan biarkan barber ahli kami memberikan gaya rambut yang Anda impikan.",
  },
];
