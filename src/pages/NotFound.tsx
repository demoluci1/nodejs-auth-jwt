
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import CustomButton from "@/components/ui/CustomButton";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-20">
        <div className="solar-container">
          <div className="max-w-lg mx-auto text-center">
            <div className="text-9xl font-bold text-tirupati-blue mb-6">404</div>
            <h1 className="text-3xl font-semibold text-gray-900 mb-4">Page Not Found</h1>
            <p className="text-xl text-gray-600 mb-8">
              The page you are looking for doesn't exist or has been moved.
            </p>
            <CustomButton 
              variant="primary" 
              size="lg"
              onClick={() => navigate('/')}
              icon={<ArrowLeft size={18} />}
              iconPosition="left"
            >
              Return to Home
            </CustomButton>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
