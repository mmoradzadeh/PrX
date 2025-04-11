using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace GUITestApplication
{
    public partial class FormTime : Form
    {
        public string CurrentTime
        {
            get { return LabelTime.Text; }
            set
            {
                if (InvokeRequired)
                    LabelTime.Invoke(new Action(() => LabelTime.Text = value));
                else
                    LabelTime.Text = value;
            }
        }

        public FormTime()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            var worker = new BackgroundWorker();
            worker.WorkerSupportsCancellation = true;

            worker.DoWork += Worker_DoWork1;

            worker.RunWorkerAsync();
        }

        private void Worker_DoWork1(object sender, DoWorkEventArgs e)
        {
            var worker = (BackgroundWorker)sender;

            while (!worker.CancellationPending)
            {
                CurrentTime = DateTime.Now.ToString("T");
                Thread.Sleep(1000);
            }
        }
    }
}
