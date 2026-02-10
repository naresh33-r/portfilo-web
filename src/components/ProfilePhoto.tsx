import { motion } from "framer-motion";

interface ProfilePhotoProps {
  imageSrc?: string;
  alt?: string;
  delay?: number;
}

const ProfilePhoto = ({
  imageSrc = "E:\\portfolio\\naresh448\\IMG-20250510-WA0013.jpg",
  alt = "Profile",
  delay = 0.05,
}: ProfilePhotoProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="flex justify-center"
    >
      <div className="relative">
        <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-2 border-primary/30 glow-purple">
          <img
            src={imageSrc}
            alt={alt}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neon-purple/20 via-transparent to-neon-cyan/20 pointer-events-none" />
      </div>
    </motion.div>
  );
};

export default ProfilePhoto;
