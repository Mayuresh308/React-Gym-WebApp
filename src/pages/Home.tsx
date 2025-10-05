import WorkoutList from "../components/WorkoutList";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white flex flex-col items-center px-4 pt-6">
      <WorkoutList />
    </div>
  );
}
