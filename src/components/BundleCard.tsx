import { Button } from "./ui/button";
import { Check, Eye, Heart, Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

interface BundleCardProps {
  title: string;
  description: string;
  image: string;
  badge: string;
  perfectFor: string[];
  whatsInside: string[];
  regularPrice: string;
  salePrice: string;
  savings: string;
  stock: string;
  rating: number;
}

export const BundleCard = ({
  title,
  description,
  image,
  badge,
  perfectFor,
  whatsInside,
  regularPrice,
  salePrice,
  savings,
  stock,
  rating,
}: BundleCardProps) => {
  return (
    <Card className="bg-card border-border hover:border-purple-500/50 transition-all duration-500 overflow-hidden group hover:shadow-2xl hover:shadow-purple-500/20 animate-fade-in hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-500"
        />
        <Badge className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-none group-hover:scale-110 transition-transform duration-500 animate-pulse-slow">
          {badge}
        </Badge>
      </div>
      
      <CardContent className="p-6 space-y-4">
        <div className="flex items-start gap-2">
          <span className="text-2xl group-hover:scale-125 transition-transform duration-300">✨</span>
          <div>
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{title}</h3>
            <p className="text-sm text-muted-foreground group-hover:text-foreground mt-1 transition-colors duration-300">{description}</p>
          </div>
        </div>

        <div>
          <p className="font-semibold text-foreground mb-2">Perfect For:</p>
          <div className="space-y-1">
            {perfectFor.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="h-4 w-4 text-green-500" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="font-semibold text-foreground mb-2">What's Inside: {whatsInside.length}-Piece Set</p>
          <div className="space-y-1">
            {whatsInside.map((item, index) => (
              <p key={index} className="text-sm text-muted-foreground pl-4">• {item}</p>
            ))}
          </div>
        </div>

        <div className="space-y-2 pt-4 border-t border-border">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground line-through">Regular Price: {regularPrice}</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-sm text-foreground">Black Friday:</span>
            <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {salePrice}
            </span>
          </div>
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg px-3 py-2">
            <p className="text-sm font-semibold text-green-600 dark:text-green-400">
              YOU SAVE: {savings}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-1">
            <span className="text-sm text-orange-500">🔥</span>
            <span className="text-sm font-medium text-orange-500">{stock}</span>
          </div>
          <div className="flex items-center gap-1">
            {Array.from({ length: rating }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>

        <div className="flex gap-2 pt-4">
          <Button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 group/btn">
            <Eye className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform duration-300" />
            Preview Bundle
          </Button>
          <Button variant="outline" size="icon" className="border-border hover:bg-accent hover:scale-110 transition-all duration-300 group/heart">
            <Heart className="h-4 w-4 group-hover/heart:fill-red-500 group-hover/heart:text-red-500 transition-all duration-300" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
