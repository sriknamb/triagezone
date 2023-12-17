const columns = [
  { name: "ID", uid: "id" },
  { name: "ROUND ID", uid: "roundId" },
  { name: "NAME", uid: "name" },
  { name: "AGE", uid: "age" },
  { name: "WEIGHT", uid: "weight" },
  { name: "BLOOD TYPE", uid: "bloodType" },
  { name: "PAST MEDICATIONS", uid: "pastMedications" },
  { name: "PAST ILLNESSES", uid: "pastIllnesses" },
  { name: "MEDICAL STATUS", uid: "medicalStatus" },
  { name: "TREATMENT", uid: "treatment" },
];

const patients = [
  {
    id: 1,
    roundId: 2,
    name: "Bob",
    age: 22,
    weight: 100,
    bloodType: "O+",
    pastMedications: ["insomnia", "drugs", "drugs", "drugs", "drugs"],
    pastIllnesses: ["insomnia", "drugs", "drugs", "drugs", "drugs"],
    medicalStatus: "red",
    treatment: "",
  },
  {
    id: 1,
    roundId: 2,
    name: "Bob",
    age: 22,
    weight: 100,
    bloodType: "O+",
    pastMedications: ["insomnia", "drugs", "drugs", "drugs", "drugs"],
    pastIllnesses: ["insomnia", "drugs", "drugs", "drugs", "drugs"],
    medicalStatus: "red",
    treatment: "",
  },
];

export { columns, patients };
