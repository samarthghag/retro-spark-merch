import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { useToast } from "@/hooks/use-toast";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [selectedMerchType, setSelectedMerchType] = useState<string | null>(null);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product not found</h1>
          <Button asChild>
            <Link to="/products">Back to Products</Link>
          </Button>
        </div>
      </div>
    );
  }

  const handleGenerateMerch = async (merchType: string) => {
    setSelectedMerchType(merchType);
    setIsGenerating(true);
    
    // Simulate AI generation (in real app, this would call Gemini API)
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    setGeneratedImage(product.image); // Using product image as placeholder
    setIsGenerating(false);
    
    toast({
      title: "Merch Generated! ✨",
      description: `Your ${merchType} design is ready!`,
    });
  };

  const handleAddToCart = () => {
    toast({
      title: "Added to Cart! 🛍️",
      description: `${product.title} has been added to your cart.`,
    });
    setTimeout(() => navigate("/cart"), 1000);
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <Button variant="ghost" asChild className="mb-8">
            <Link to="/products">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Products
            </Link>
          </Button>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="glass-card rounded-3xl overflow-hidden glow-border">
                <div className="aspect-[3/4] relative">
                  <img
                    src={generatedImage || product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                  {isGenerating && (
                    <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center">
                      <div className="text-center">
                        <Loader2 className="w-12 h-12 text-primary animate-spin mx-auto mb-4" />
                        <p className="text-xl font-bold">Generating your merch...</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <div className="inline-block mb-4">
                  <span className="bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    {product.category}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{product.title}</h1>
                <p className="text-3xl font-bold text-gradient mb-6">${product.price}</p>
                <p className="text-lg text-muted-foreground">{product.description}</p>
              </div>

              <div className="glass-card p-6 rounded-2xl space-y-4">
                <h3 className="text-xl font-bold">Buy as Poster</h3>
                <Button
                  size="lg"
                  variant="neon"
                  className="w-full"
                  onClick={handleAddToCart}
                >
                  🖼️ Add Poster to Cart
                </Button>
              </div>

              <div className="glass-card p-6 rounded-2xl space-y-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <span className="text-gradient">✨ Turn Into Merch with AI</span>
                </h3>
                <p className="text-sm text-muted-foreground">
                  Our AI will instantly generate a preview of this poster on your chosen product!
                </p>
                <div className="grid grid-cols-3 gap-3">
                  <Button
                    variant={selectedMerchType === "hoodie" ? "default" : "glass"}
                    onClick={() => handleGenerateMerch("hoodie")}
                    disabled={isGenerating}
                  >
                    👕 Hoodie
                  </Button>
                  <Button
                    variant={selectedMerchType === "sweatshirt" ? "default" : "glass"}
                    onClick={() => handleGenerateMerch("sweatshirt")}
                    disabled={isGenerating}
                  >
                    👚 Sweatshirt
                  </Button>
                  <Button
                    variant={selectedMerchType === "mug" ? "default" : "glass"}
                    onClick={() => handleGenerateMerch("mug")}
                    disabled={isGenerating}
                  >
                    ☕ Mug
                  </Button>
                </div>
                {generatedImage && (
                  <Button
                    size="lg"
                    variant="secondary"
                    className="w-full"
                    onClick={handleAddToCart}
                  >
                    Add {selectedMerchType} to Cart
                  </Button>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
