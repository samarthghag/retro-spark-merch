import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";

export default function Success() {
  // Mock order data
  const orderItems = [
    { product: products[0], quantity: 1 },
    { product: products[1], quantity: 1 },
  ];
  const total = orderItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
              className="inline-block mb-6"
            >
              <CheckCircle className="w-24 h-24 text-primary mx-auto" />
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-gradient">Thank You!</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-2">
              Your order has been successfully placed
            </p>
            <p className="text-muted-foreground">
              Order #RM{Math.floor(Math.random() * 10000)}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="glass-card rounded-3xl p-8 glow-border mb-8"
          >
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

            <div className="space-y-4 mb-6">
              {orderItems.map((item) => (
                <div key={item.product.id} className="flex gap-4 items-center">
                  <img
                    src={item.product.image}
                    alt={item.product.title}
                    className="w-16 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold">{item.product.title}</h3>
                    <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                  </div>
                  <p className="font-bold">${item.product.price}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-4">
              <div className="flex justify-between text-2xl font-bold">
                <span>Total Paid</span>
                <span className="text-gradient">${total.toFixed(2)}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center space-y-4"
          >
            <p className="text-muted-foreground">
              We'll send you a confirmation email with tracking information soon.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="neon" asChild>
                <Link to="/products">
                  Continue Shopping
                </Link>
              </Button>
              <Button size="lg" variant="glass" asChild>
                <Link to="/">
                  Back to Home
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Floating confetti elements */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: -100, opacity: 0 }}
              animate={{
                y: 800,
                opacity: [0, 1, 1, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 3,
                delay: i * 0.2,
                repeat: Infinity,
                repeatDelay: 2,
              }}
              className="absolute top-0 pointer-events-none"
              style={{ left: `${10 + i * 15}%` }}
            >
              <Sparkles className="w-6 h-6 text-primary" />
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
