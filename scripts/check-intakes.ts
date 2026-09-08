import { openEnglishIntakeBeyond } from "../content/next-intake";
import { featuredCourse } from "../content/courses";
import { nextIntake } from "../content/next-intake";

const MINIMUM_DAYS_OUT = 7;
const now = new Date();
const englishOpen = openEnglishIntakeBeyond(now, MINIMUM_DAYS_OUT);
const nextEnglish = nextIntake("en", now);

if (!englishOpen) {
  process.stderr.write(
    `check:intakes failed: no open English intake more than ${MINIMUM_DAYS_OUT} days out (now=${now.toISOString()}).\n`,
  );
  process.exit(1);
}

if (!featuredCourse) {
  process.stderr.write("check:intakes failed: Category B is missing.\n");
  process.exit(1);
}

process.stdout.write(
  `check:intakes ok\n  next English: ${nextEnglish?.id ?? "none"} ${nextEnglish?.startsAt ?? ""}\n  open English >${MINIMUM_DAYS_OUT}d: ${englishOpen.id} ${englishOpen.startsAt}\n  Category B: ${featuredCourse.priceGross} zł\n`,
);
