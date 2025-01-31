import dataJson from "../../public/data/data.json"; 
import CardList from "../album/components/posts/Cardlist";
import ViewUserButton from "../album/components/posts/ViewUserBotton";

// Interface untuk data pengguna
interface IUser {
  id: number;
  name: string;
  hobbies?: { id: number; name: string }[];
  age: number;
  address: string;
  city: string;
  phone: string;
}

// Asumsikan dataJson adalah array dari IUser
const UserList = () => {
  const users: IUser[] = dataJson; 


  const getSemuanya = () => users;


  const getDataDenganNama = (name: string) => {
    return users.filter(user => user.name.toLowerCase().includes(name.toLowerCase()));
  };


  const getDataAlamat = (city: string) => {
    return users.filter(user => user.city.toLowerCase() === city.toLowerCase());
  };

  
  const getDataUmur = (minAge: number) => {
    return users.filter(user => user.age >= minAge);
  };

 
  const semuaUser = getSemuanya();
  const namaJohn = getDataDenganNama("John");
  const alamatNewYork = getDataAlamat("New York");
  const umurTigaPuluh = getDataUmur(30);

  return (
    <>
      <p>{new Date().toLocaleTimeString()}</p>
      <h1 className="text-fuchsia-500">HALAMAN PENGGUNA</h1>
      <center><h3>TAMPIL SEMUA DATA</h3></center>
      {semuaUser.map((user) => (
        <CardList key={user.id}>
          <p>Nama: {user.name}</p>
          {user.hobbies && user.hobbies.length > 0 && (
            <p>Hobi: {user.hobbies.map(hobby => hobby.name).join(", ")}</p>
          )}
          <p>Umur: {user.age}</p>
          <p>Alamat: {user.address}</p>
          <p>Kota: {user.city}</p>
          <p>Nomor HP: {user.phone}</p>
          <ViewUserButton userId={user.id} />
        </CardList>
      ))}
      <center><h3>TAMPIL DATA DENGAN NAMA TERTENTU ("John")</h3></center>
      {namaJohn.map((user) => (
        <CardList key={user.id}>
          <p>Nama: {user.name}</p>
          {user.hobbies && user.hobbies.length > 0 && (
            <p>Hobi: {user.hobbies.map(hobby => hobby.name).join(", ")}</p>
          )}
          <p>Umur: {user.age}</p>
          <p>Alamat: {user.address}</p>
          <p>Kota: {user.city}</p>
          <p>Nomor HP: {user.phone}</p>
          <ViewUserButton userId={user.id} />
        </CardList>
      ))}
      <center><h3>TAMPIL DATA DENGAN ALAMAT NEW YORK</h3></center>
      {alamatNewYork.map((user) => (
        <CardList key={user.id}>
          <p>Nama: {user.name}</p>
          {user.hobbies && user.hobbies.length > 0 && (
            <p>Hobi: {user.hobbies.map(hobby => hobby.name).join(", ")}</p>
          )}
          <p>Umur: {user.age}</p>
          <p>Alamat: {user.address}</p>
          <p>Kota: {user.city}</p>
          <p>Nomor HP: {user.phone}</p>
          <ViewUserButton userId={user.id} />
        </CardList>
      ))}
      <center><h3>TAMPIL DATA DENGAN UMUR LEBIH DARI 30 TAHUN</h3></center>
      {umurTigaPuluh.map((user) => (
        <CardList key={user.id}>
          <p>Nama: {user.name}</p>
          {user.hobbies && user.hobbies.length > 0 && (
            <p>Hobi: {user.hobbies.map(hobby => hobby.name).join(", ")}</p>
          )}
          <p>Umur: {user.age}</p>
          <p>Alamat: {user.address}</p>
          <p>Kota: {user.city}</p>
          <p>Nomor HP: {user.phone}</p>
          <ViewUserButton userId={user.id} />
        </CardList>
      ))}
    </>
  );
};

export default UserList;
