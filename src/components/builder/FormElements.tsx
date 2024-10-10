import { ParagraphFieldFormElements } from "../fields/ParagraphField";
import { SeparatorFieldFormElements } from "../fields/SeparatorField";
import { SpacerFieldFormElements } from "../fields/SpacerField";
import { SubTitleFieldFormElements } from "../fields/SubTitleField";
import { TextFieldFormElements } from "../fields/TextFild";
import { TitleFieldFormElements } from "../fields/TitleField";

export type ElementsType =
  | "TextField"
  | "TitleField"
  | "SubTitleField"
  | "ParagraphField"
  | "SeparatorField"
  | "SpacerField";

export type submitFunction = (key: string, value: string) => void;

export type FormElement = {
  type: ElementsType;

  construct: (id: string) => FormElementsInstance;

  designerBtnComponent: {
    icon: React.ElementType;
    label: string;
  };

  designerComponent: React.FC<{
    elementInstance: FormElementsInstance;
  }>;
  formComponent: React.FC<{
    elementInstance: FormElementsInstance;
    submitValue?: submitFunction;
    isInvalid?: boolean;
    defaultValue?: string;
  }>;
  propertiesComponent: React.FC<{
    elementInstance: FormElementsInstance;
  }>;

  validate: (
    formElement: FormElementsInstance,
    currentValue: string
  ) => boolean;
};

export type FormElementsInstance = {
  id: string;
  type: ElementsType;
  extraAttibutes?: Record<string, any>;
};

type FormElementsType = {
  [key in ElementsType]: FormElement;
};

export const FormElements: FormElementsType = {
  TextField: TextFieldFormElements,
  TitleField: TitleFieldFormElements,
  SubTitleField: SubTitleFieldFormElements,
  ParagraphField: ParagraphFieldFormElements,
  SeparatorField: SeparatorFieldFormElements,
  SpacerField: SpacerFieldFormElements,
};
