/** Resolved when `src/assets/doctor1.jpg` and `doctor2.jpg` are added to the project. */
const modules = import.meta.glob<string>("../assets/doctor*.jpg", {
  eager: true,
  import: "default",
});

export const doc1 = modules["../assets/doctor1.jpg"] ?? null;
export const doc2 = modules["../assets/doctor2.jpg"] ?? null;

export const MISSING_DOCTOR_FILES = [
  !doc1 && "src/assets/doctor1.jpg",
  !doc2 && "src/assets/doctor2.jpg",
].filter(Boolean) as string[];
