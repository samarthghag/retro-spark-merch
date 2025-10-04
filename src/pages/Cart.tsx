import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingBag, Trash2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";

export default function Cart() {
  // Mock cart items
  const cartItems = [
    { product: products[0], quantity: 1 },
    { product: products[1], quantity: 1 },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-24 pb-12 min-h-[60vh] flex items-center">
          <div className="container mx-auto px-4 text-center">
            <ShoppingBag className="w-24 h-24 text-muted-foreground mx-auto mb-6 opacity-50" />
            <h1 className="text-4xl font-bold mb-4">Your cart is empty</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Start shopping to add items to your cart
            </p>
            <Button size="lg" variant="neon" asChild>
              <Link to="/products">Browse Products</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar cartItemCount={cartItems.length} />

      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-8">
              <span className="text-gradient">Your Cart</span>
            </h1>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item, index) => (
                  <motion.div
                    key={item.product.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="glass-card p-6 rounded-2xl"
                  >
                    <div className="flex gap-6">
                      <img
                        src={item.product.image}
                        alt={item.product.title}
                        className="w-24 h-32 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-xl font-bold mb-1">{item.product.title}</h3>
                            <p className="text-sm text-muted-foreground">{item.product.category}</p>
                          </div>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="w-4 h-4 text-destructive" />
                          </Button>
                        </div>
                        <div className="flex justify-between items-end mt-4">
                          <p className="text-muted-foreground">Quantity: {item.quantity}</p>
                          <p className="text-2xl font-bold text-gradient">${item.product.price}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="glass-card p-6 rounded-2xl sticky top-24">
                  <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-muted-foreground">
                      <span>Subtotal</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Shipping</span>
                      <span>Free</span>
                    </div>
                    <div className="border-t border-border pt-4">
                      <div className="flex justify-between text-2xl font-bold">
                        <span>Total</span>
                        <span className="text-gradient">${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  <Button size="lg" variant="neon" className="w-full" asChild>
                    <Link to="/success">Proceed to Checkout</Link>
                  </Button>

                  <Button variant="ghost" className="w-full mt-3" asChild>
                    <Link to="/products">Continue Shopping</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
