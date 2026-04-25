import { FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Header } from "@/components/site/Header";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle } from "lucide-react";

const Login = () => {
  const { t } = useTranslation();
  const [error, setError] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container-narrow flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-12">
        <Card className="w-full max-w-md border-border shadow-sm">
          <CardHeader>
            <CardTitle>{t("loginPage.title")}</CardTitle>
            <CardDescription>{t("loginPage.subtitle")}</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={onSubmit} className="space-y-4">
              {error ? (
                <Alert variant="destructive" className="border-destructive/50">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{t("loginPage.errorInvalid")}</AlertDescription>
                </Alert>
              ) : null}
              <div className="space-y-2">
                <Label htmlFor="username">{t("loginPage.username")}</Label>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  className="bg-background"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">{t("loginPage.password")}</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  className="bg-background"
                />
              </div>
              <Button type="submit" className="w-full">
                {t("loginPage.submit")}
              </Button>
            </form>
            <p className="mt-6 text-center text-sm text-muted-foreground">
              <Link to="/" className="font-medium text-primary underline-offset-4 hover:underline">
                {t("loginPage.backHome")}
              </Link>
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Login;
