const modules = import.meta.glob<string>("../assets/doctor*.jpg", {
  eager: true,
  import: "default",
});

export const doc1 = modules["../assets/doctor1.jpg"] ?? null;
export const doc2 = modules["../assets/doctor2.jpg"] ?? null;
export const doc3 = modules["../assets/doctor3.jpg"] ?? null;