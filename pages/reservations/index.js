import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import axios from "axios";
import {toast} from 'react-hot-toast'
const sacraments = [
  { label: "Baptismal Rites", value: "baptismal_rites" },
  { label: "First Reconciliation", value: "first_reconciliation" },
  { label: "First Holy Communion", value: "first_holy_communion" },
  { label: "Confirmation Rites", value: "confirmation_rites" },
  { label: "Wedding Rites", value: "wedding_rites" },
  { label: "Religious Services", value: "religious_services" },
];

export default function Reservations() {
  const router = useRouter();
  const { sacrament } = router.query;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {

    try {
      const filteredData = Object.fromEntries(
        Object.entries(data).filter(([key, value]) => value !== "")
      );
  
      // Using toast.promise for asynchronous actions
      await toast.promise(
        axios.post("/api/contact", {
          formData: filteredData,
        }),
        {
          loading: "Submitting reservation...",
          success: "Reservation submitted successfully!",
          error: "Reservation submission failed. Please try again.",
        }
      );
  
      // Optionally, you can reset the form after successful submission
      reset();
    } catch (err) {
      // Show error toast if the submission fails
      toast.error("Reservation submission failed. Please try again.");
    }
  };
  

  const handleSacramentChange = (selectedValue) => {
    router.push({
      pathname: router.pathname,
      query: { sacrament: selectedValue },
    });

    reset();
  };

  const renderForm = (sacrament) => {
    switch (sacrament) {
      case "baptismal_rites":
        return (
          <div className="flex flex-col gap-4 mb-4">
            <div>
              <label
                htmlFor="child_name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Baptizand's Full name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="child_name"
                  id="child_name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("name_of_baptizand")}
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="father_name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Father's Full Name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="father_name"
                  id="father_name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("name_of_father")}
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="mother_name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Mother's Full Name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="mother_name"
                  id="mother_name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("name_of_mother")}
                  required
                />
              </div>
            </div>
          </div>
        );
      case "wedding_rites":
        return (
          <div className="flex flex-col gap-4 mb-4">
            <div>
              <label
                htmlFor="father_name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Bridegroom's Full Name (Male)
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="father_name"
                  id="father_name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("name_of_bridegroom")}
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="mother_name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Bride's Full Name (Female)
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="mother_name"
                  id="mother_name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("name_of_bride")}
                  required
                />
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="flex flex-col gap-4 mb-4">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("first_name")}
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("last_name")}
                  required
                />
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className=" bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center z-9999">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Make Reservations
        </h2>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        {renderForm(sacrament)}
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
                {...register("email")}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Phone number
            </label>
            <div className="mt-2.5">
              <input
                type="phone"
                name="phone"
                id="phone"
                autoComplete="phone"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
                {...register("phone")}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="location"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Type of Sacrament
            </label>
            <select
              {...register("sacrament")}
              id="location"
              name="location"
              required
              onChange={(e) => handleSacramentChange(e.target.value)}
              value={sacrament}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              {sacraments.map((item, idx) => (
                <option key={idx} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="date"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Reservation date
            </label>
            <div className="mt-2.5">
              <input
                type="date"
                name="date"
                id="date"
                {...register("date")}
                required
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
                {...register("notes")}
              />
            </div>
          </div>
        </div>

        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
