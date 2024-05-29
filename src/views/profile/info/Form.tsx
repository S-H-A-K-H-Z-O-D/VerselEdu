import InputField from "@/components/form/InputField.tsx"
import SelectField from "@/components/form/SelectField.tsx"
import TextareaField from "@/components/form/TextareaField.tsx"
import { FieldValues } from "react-hook-form"
import { countries, regions, sexOptions } from "@/constants"

const ProfileForm = ({ methods }: FieldValues) => {
  const { control } = methods

  return (
    <div className="max-w-6xl mx-auto space-y-10 max-xl:px-5">
      <InputField
        className="text-[clamp(1.4rem,_1.4vw,_1.6rem)]"
        type="text"
        methods={methods}
        name="name"
        label="Ismingizni kiriting"
        required
        placeholder="Ismingiz"
      />
      <InputField
        type="text"
        methods={methods}
        name="surname"
        label="Familyangizni kiriting"
        required
        placeholder="Familyangiz"
      />

      <div className="sm:flex gap-5 max-sm:space-y-5">
        <InputField
          type="number"
          methods={methods}
          name="age"
          label="Yoshingizni kiriting"
          required
          placeholder="Yoshingiz"
          className="w-full"
        />
        <SelectField
          className="w-full"
          control={control}
          name="sex"
          label="Jinsingizni tanlang"
          required
          placeholder="Jinsingiz"
          options={sexOptions}
        />
      </div>

      <div className="sm:flex gap-5 max-sm:space-y-5">
        <SelectField
          control={control}
          className="w-full"
          name="country"
          label="Davlatingizni tanlang"
          required
          placeholder="Davlatingiz"
          options={countries}
        />
        <SelectField
          control={control}
          className="w-full"
          name="region"
          label="Viloyatingizni tanlang"
          required
          placeholder="Viloyatingiz"
          options={regions}
        />
      </div>
      <InputField
        type="email"
        methods={methods}
        name="email"
        label="Elektron pochtangizni kiriting"
        placeholder="masalan@gmail.com"
      />
      <TextareaField
        methods={methods}
        name="description"
        label="O’zingiz haqingizda ma'lumot"
        placeholder="Ma'lumot kiriting"
      />
    </div>
  )
}
export default ProfileForm
