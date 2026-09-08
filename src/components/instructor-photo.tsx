import Image from "next/image";
import type { Instructor } from "content/types";

type InstructorPhotoProps = {
  person: Instructor;
  size: "thumb" | "card";
  priority?: boolean;
  sizes?: string;
};

export function InstructorPhoto({ person, size, priority, sizes }: InstructorPhotoProps) {
  const isCard = size === "card";

  return (
    <Image
      src={person.photo}
      alt={person.name}
      width={640}
      height={640}
      sizes={sizes ?? (isCard ? "(max-width: 768px) 100vw, 50vw" : "112px")}
      className={isCard ? "aspect-square w-full object-cover" : "h-28 w-28 object-cover"}
      priority={priority}
      quality={70}
    />
  );
}
