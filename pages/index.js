import Head from "next/head";
import Navbar from "../components/Navbar";
import Posts from '../components/Post';
import Footer from '../components/Footer';
import { getServerSideProps } from './api/api';

const Home = ({ users, posts }) => {
  return (
    <div className="container mx-auto">
      <Head>
        <title>ITMD543 Lab 4</title>
      </Head>

      <main>
        <Navbar />
        <Posts posts={posts} users={users} />
        <Footer />
      </main>
    </div>
  );
}

export { getServerSideProps };
export default Home;