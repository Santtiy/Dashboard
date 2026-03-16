import {
  ArrowDown,
  ArrowUp,
  BarChart3,
  Bell,
  Boxes,
  CalendarDays,
  ChevronDown,
  ChevronLeft,
  CircleArrowLeft,
  CircleArrowRight,
  ClipboardList,
  CloudDownload,
  Home,
  LogOut,
  Megaphone,
  MessageCircle,
  Package,
  Search,
  ShoppingCart,
  Slack,
  Users,
} from "lucide-react";
import { SessionsApexChart } from "./components/SessionsApexChart";
import { ConversionApexGauge } from "./components/ConversionApexGauge";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-200/70 flex items-center justify-center p-8">
      <div className="w-full max-w-315 rounded-[26px] bg-white border-8 border-white shadow-[0_30px_80px_rgba(15,23,42,0.12)] overflow-hidden">
        <div className="grid grid-cols-[248px_1fr]">
          <aside className="bg-white border-r border-slate-200 px-6 py-7 flex flex-col justify-between">
            <div className="flex flex-col gap-9">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-2xl bg-amber-400 flex items-center justify-center font-bold text-white text-sm">
                  R
                </div>
                <span className="text-3xl leading-none font-semibold text-slate-900">
                  flex
                </span>
              </div>

              <div className="flex flex-col gap-4">
                <span className="text-xs font-normal text-slate-400">Menu</span>
                <nav className="flex flex-col gap-1.5">
                  <button className="flex items-center justify-between px-4 py-2.5 rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-300/60">
                    <span className="flex items-center gap-3 text-sm font-semibold">
                      <Home size={16} />
                      Dashboard
                    </span>
                  </button>
                  <button className="flex items-center justify-between px-3 py-2 text-slate-700 text-sm">
                    <span className="flex items-center gap-3 font-semibold">
                      <ClipboardList size={16} />
                      Orders
                    </span>
                    <ChevronDown size={14} className="text-slate-400" />
                  </button>
                  <button className="flex items-center justify-between px-3 py-2 text-slate-700 text-sm">
                    <span className="flex items-center gap-3 font-semibold">
                      <Boxes size={16} />
                      Products
                    </span>
                    <ChevronDown size={14} className="text-slate-400" />
                  </button>
                  <button className="flex items-center gap-3 px-3 py-2 text-slate-700 text-sm font-semibold">
                    <BarChart3 size={16} />
                    Analytics
                  </button>
                  <button className="flex items-center justify-between px-3 py-2 text-slate-700 text-sm">
                    <span className="flex items-center gap-3 font-semibold">
                      <Megaphone size={16} />
                      Marketing
                    </span>
                    <ChevronDown size={14} className="text-slate-400" />
                  </button>
                  <button className="flex items-center justify-between px-3 py-2 text-slate-700 text-sm">
                    <span className="flex items-center gap-3 font-semibold">
                      <MessageCircle size={16} />
                      Messages
                    </span>
                    <span className="h-5 min-w-5 px-1 rounded-full bg-emerald-500 text-white text-[10px] font-semibold flex items-center justify-center">
                      25
                    </span>
                  </button>
                </nav>
              </div>

              <div className="flex flex-col gap-3 mt-2">
                <span className="text-xs font-normal text-slate-400">Integrations</span>
                <div className="flex flex-col gap-3 text-slate-700">
                  <span className="flex items-center gap-3 text-sm font-semibold">
                    <Package size={16} className="text-blue-500" />
                    Jira
                  </span>
                  <span className="flex items-center gap-3 text-sm font-semibold">
                    <Slack size={16} className="text-emerald-500" />
                    Slack
                  </span>
                  <span className="flex items-center gap-3 text-sm font-semibold">
                    <MessageCircle size={16} className="text-indigo-500" />
                    Intercom
                  </span>
                </div>
              </div>
            </div>

            <button className="mt-10 text-sm text-slate-700 font-semibold text-left flex items-center gap-3">
              <LogOut size={16} />
              Logout
            </button>
          </aside>

          <main className="bg-white px-8 py-7">
            <header className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3 w-[62%]">
                <button className="h-8 w-8 rounded-full border border-slate-200 bg-white text-slate-400 flex items-center justify-center">
                  <ChevronLeft size={14} />
                </button>
                <div className="flex-1 h-11 bg-white rounded-full border border-slate-200 px-4 flex items-center gap-2">
                  <Search size={16} className="text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full bg-transparent outline-none text-sm text-slate-600"
                  />
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button className="h-9 w-9 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 relative">
                  <Bell size={16} />
                  <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-indigo-500" />
                </button>
                <div className="pl-4 pr-5 border-l border-slate-200">
                  <p className="text-[11px] text-slate-400 leading-none">Your Balance</p>
                  <p className="text-xl text-indigo-600 font-semibold leading-tight">$5,456</p>
                </div>
                <div className="h-10 w-10 rounded-full overflow-hidden bg-amber-300">
                  <img
                    src="https://cdn.discordapp.com/attachments/1235371416237510667/1483149983342395402/3135768.png?ex=69b98a8f&is=69b8390f&hm=0eb7495cfc43072eee635f1b557b61c9df414c9f95ed2e276e07f9f11656da29&"
                    alt="Foto de perfil"
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="text-sm font-semibold text-slate-700">Hi, Lay</span>
              </div>
            </header>

            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-xl bg-indigo-700 text-white flex items-center justify-center">
                  <Home size={16} />
                </div>
                <h1 className="text-3xl font-semibold text-slate-900">Dashboard</h1>
              </div>

              <div className="flex items-center gap-3">
                <button className="h-10 px-4 rounded-full border border-slate-200 bg-white text-sm text-slate-500 flex items-center gap-2">
                  <CalendarDays size={14} className="text-slate-400" />
                  This Month
                  <ChevronDown size={14} className="text-slate-400" />
                </button>
                <button className="h-10 px-5 rounded-full bg-emerald-500 text-white text-sm font-medium flex items-center gap-2 shadow-lg shadow-emerald-300/60">
                  <CloudDownload size={14} />
                  Download Report
                </button>
              </div>
            </div>

            <div className="bg-slate-100 rounded-3xl p-4">
              <section className="grid grid-cols-3 gap-4 mb-4">
                <div className="bg-white rounded-2xl px-5 py-4 flex items-center gap-3 border border-slate-100">
                  <div className="h-10 w-10 rounded-full bg-indigo-50 text-indigo-500 flex items-center justify-center">
                    <ShoppingCart size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-semibold">Total Sales</p>
                    <p className="text-4xl font-semibold leading-tight text-slate-900">263k</p>
                  </div>
                  <span className="ml-auto text-xs text-emerald-500 font-semibold">↑ 15.6%</span>
                </div>
                <div className="bg-white rounded-2xl px-5 py-4 flex items-center gap-3 border border-slate-100">
                  <div className="h-10 w-10 rounded-full bg-indigo-50 text-indigo-500 flex items-center justify-center">
                    <Users size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-semibold">Total Visitors</p>
                    <p className="text-4xl font-semibold leading-tight text-slate-900">35k</p>
                  </div>
                  <span className="ml-auto text-xs text-rose-500 font-semibold">↓ 6.2%</span>
                </div>
                <div className="bg-white rounded-2xl px-5 py-4 flex items-center gap-3 border border-slate-100">
                  <div className="h-10 w-10 rounded-full bg-indigo-50 text-indigo-500 flex items-center justify-center">
                    <Package size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-semibold">Total Orders</p>
                    <p className="text-4xl font-semibold leading-tight text-slate-900">165k</p>
                  </div>
                  <span className="ml-auto text-xs text-emerald-500 font-semibold">↑ 3.5%</span>
                </div>
              </section>

              <section className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl px-5 py-4 border border-slate-100">
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-semibold text-slate-900">Online Store Sessions</p>
                  <button className="h-10 px-5 rounded-full border border-slate-200 text-slate-500 text-sm bg-white">
                    View Report
                  </button>
                </div>

                <div className="mt-4 flex items-center justify-between pb-3 border-b border-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-indigo-50 text-indigo-500 flex items-center justify-center">
                      <Users size={16} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Visitors</p>
                      <p className="text-4xl font-semibold leading-none text-slate-900">68</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-x-8 text-right text-sm">
                    <span className="text-emerald-500 font-semibold">↑ 15.6%</span>
                    <span className="text-indigo-500 font-semibold">26</span>
                    <span className="text-transparent">.</span>
                    <span className="text-rose-500 font-semibold">↓ 1.6%</span>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-slate-400 text-sm">
                  <span>Sessions Over Time</span>
                  <button className="h-9 px-4 rounded-full border border-slate-200 bg-white text-sm text-slate-500 flex items-center gap-2">
                    <CalendarDays size={14} className="text-slate-400" />
                    February
                    <ChevronDown size={14} className="text-slate-400" />
                  </button>
                </div>

                <div className="mt-3 rounded-2xl bg-slate-50 px-3 py-2">
                  <SessionsApexChart />
                  <div className="mt-2 flex items-center justify-between px-2 text-xs text-slate-400">
                    <button className="h-8 w-8 rounded-full border border-slate-200 bg-white text-slate-300 flex items-center justify-center">
                      <CircleArrowLeft size={15} />
                    </button>
                    <span className="h-8 min-w-8 px-2 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-300/70">
                      21
                    </span>
                    <span>22</span>
                    <span>23</span>
                    <span>24</span>
                    <span>25</span>
                    <button className="h-8 w-8 rounded-full border border-slate-200 bg-white text-slate-300 flex items-center justify-center">
                      <CircleArrowRight size={15} />
                    </button>
                  </div>
                </div>
              </div>

                <div className="flex flex-col gap-4">
                  <div className="h-44 rounded-2xl px-5 py-4 bg-linear-to-br from-indigo-500 via-indigo-600 to-cyan-500 text-white relative overflow-hidden">
                    <div className="absolute -right-8 -top-6 h-24 w-24 rounded-full bg-white/10" />
                    <div className="absolute right-16 top-10 h-16 w-8 rounded-full bg-white/10" />
                    <div className="relative z-10 flex h-full flex-col justify-between">
                      <div>
                        <p className="text-3xl font-semibold leading-tight">Need More Stats?</p>
                        <p className="text-sm text-indigo-100">Upgrade to pro for added benefits.</p>
                      </div>
                      <button className="h-10 px-6 rounded-full bg-emerald-500 text-white text-sm font-medium self-start flex items-center gap-2">
                        <span className="h-4 w-4 rounded-full border border-white/60 flex items-center justify-center text-[10px]">↑</span>
                        Go Pro Now
                      </button>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl px-5 py-4 border border-slate-100">
                    <p className="text-3xl font-semibold text-slate-900 mb-2">Conversion</p>

                    <div className="mx-auto max-w-[320px]">
                      <ConversionApexGauge />
                    </div>

                    <div className="-mt-1 text-center text-emerald-500 text-sm font-semibold">↑ 3.5%</div>

                    <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-2 gap-3 text-sm">
                      <div className="rounded-xl bg-slate-50 px-3 py-2 flex items-center justify-between">
                        <span className="flex items-center gap-2 text-slate-500">
                          <ArrowDown size={14} className="text-emerald-500" />
                          Income
                        </span>
                        <span className="font-semibold text-slate-900">$542,317</span>
                      </div>
                      <div className="rounded-xl bg-slate-50 px-3 py-2 flex items-center justify-between">
                        <span className="flex items-center gap-2 text-slate-500">
                          <ArrowUp size={14} className="text-slate-900" />
                          Expenses
                        </span>
                        <span className="font-semibold text-slate-900">$497,456</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
