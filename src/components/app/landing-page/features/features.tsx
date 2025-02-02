import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Features() {

  const t = useTranslations("homepage");

  return (
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <Card className="dark:bg-gray-800 dark:border-gray-700">
        <CardContent className="flex flex-col items-center space-y-4 p-6">
          <Image
            src="/icons/chart.png"
            width={70}
            height={70}
            alt="Study Analysis"
          />
          <h3 className="text-xl font-bold dark:text-gray-100">
            {t("features.studyAnalysis.title")}
          </h3>
          <p className="text-center text-gray-500 dark:text-gray-400">
            {t("features.studyAnalysis.description")}
          </p>
        </CardContent>
      </Card>

      <Card className="dark:bg-gray-800 dark:border-gray-700">
        <CardContent className="flex flex-col items-center space-y-4 p-6">
          <Image
            src="/icons/bookmark.png"
            width={70}
            height={70}
            alt="Library"
          />
          <h3 className="text-xl font-bold dark:text-gray-100">
            {t("features.library.title")}
          </h3>
          <p className="text-center text-gray-500 dark:text-gray-400">
            {t("features.library.description")}
          </p>
        </CardContent>
      </Card>

      <Card className="dark:bg-gray-800 dark:border-gray-700">
        <CardContent className="flex flex-col items-center space-y-4 p-6">
          <Image
            src="/icons/flash.png"
            width={70}
            height={70}
            alt="Flash cards"
          />
          <h3 className="text-xl font-bold dark:text-gray-100">
            {t("features.flashcards.title")}
          </h3>
          <p className="text-center text-gray-500 dark:text-gray-400">
            {t("features.flashcards.description")}
          </p>
        </CardContent>
      </Card>

      <Card className="dark:bg-gray-800 dark:border-gray-700">
        <CardContent className="flex flex-col items-center space-y-4 p-6">
          <Image
            src="/icons/folder.png"
            width={70}
            height={70}
            alt="Flash cards"
          />
          <h3 className="text-xl font-bold dark:text-gray-100">
            {t("features.fileUpload.title")}
          </h3>
          <p className="text-center text-gray-500 dark:text-gray-400">
            {t("features.fileUpload.description")}
          </p>
        </CardContent>
      </Card>

      <Card className="dark:bg-gray-800 dark:border-gray-700">
        <CardContent className="flex flex-col items-center space-y-4 p-6">
          <Image
            src="/icons/file-text.png"
            width={70}
            height={70}
            alt="Flash cards"
          />
          <h3 className="text-xl font-bold dark:text-gray-100">
            {t("features.pdfSummaries.title")}
          </h3>
          <p className="text-center text-gray-500 dark:text-gray-400">
            {t("features.pdfSummaries.description")}
          </p>
        </CardContent>
      </Card>

      <Card className="dark:bg-gray-800 dark:border-gray-700">
        <CardContent className="flex flex-col items-center space-y-4 p-6">
          <Image
            src="/icons/calendar.png"
            width={70}
            height={70}
            alt="Calendar"
          />
          <h3 className="text-xl font-bold dark:text-gray-100">
            {t("features.calendar.title")}
          </h3>
          <p className="text-center text-gray-500 dark:text-gray-400">
            {t("features.calendar.description")}
          </p>
        </CardContent>
      </Card>

      <Card className="dark:bg-gray-800 dark:border-gray-700">
        <CardContent className="flex flex-col items-center space-y-4 p-6">
          <Image src="/icons/clock.png" width={70} height={70} alt="Timer" />
          <h3 className="text-xl font-bold dark:text-gray-100">
            {t("features.multitaskTimer.title")}
          </h3>
          <p className="text-center text-gray-500 dark:text-gray-400">
            {t("features.multitaskTimer.description")}
          </p>
        </CardContent>
      </Card>

      <Card className="dark:bg-gray-800 dark:border-gray-700">
        <CardContent className="flex flex-col items-center space-y-4 p-6">
          <Image
            src="/icons/fire.png"
            width={70}
            height={70}
            alt="User Progress"
          />
          <h3 className="text-xl font-bold dark:text-gray-100">
            {t("features.userProgress.title")}
          </h3>
          <p className="text-center text-gray-500 dark:text-gray-400">
            {t("features.userProgress.description")}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
